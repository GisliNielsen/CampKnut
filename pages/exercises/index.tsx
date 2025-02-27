import clsx from "clsx";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useEffect, useState } from "react";
import ExercisePreview from "../../components/exercise/ExercisePreview";
import PageLayout from "../../components/layout/PageLayout";
import { getExercises } from "../../utils/contentful";
import slugify from "../../utils/slugify";
import ScrollContainer from "react-indiana-drag-scroll";
import { IUIExercise } from "../../model/ui";
import { placeHolderImage } from "../../content/links";

export default function ExerciseListPage({
  exercises,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredExercises, setFilteredExercises] = useState(exercises);

  const tags = [
    ...new Set(
      exercises.flatMap((e) => e.tags).filter((x) => typeof x === "string" && x)
    ),
  ] as string[];

  const [searchTags, setSearchTags] = useState(
    tags.map((e) => ({ tag: e, active: false }))
  );

  useEffect(() => {
    const e = exercises.filter(filterLogic);
    setFilteredExercises(e);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTags, searchTerm]);

  const filterLogic = (e: IUIExercise) => {
    const term = slugify(searchTerm.toLowerCase());
    const name = slugify(e.name.toLowerCase());
    const tags = e.tags;

    const activeTags = searchTags.filter((x) => x.active);
    const tagIntersection = activeTags.filter((x) => tags.includes(x.tag));

    return name.includes(term) && tagIntersection.length === activeTags.length;
  };

  return (
    <PageLayout widthClassName="max-w-none">
      <h1 className="text-3xl font-bold">Exercises</h1>
      <div className="my-8">
        <ScrollContainer
          hideScrollbars
          nativeMobileScroll
          className="flex flex-row gap-4 cursor-grab"
          horizontal
        >
          {searchTags
            .sort((a, b) => a.tag.localeCompare(b.tag))
            .map((e) => (
              <div
                key={e.tag}
                className={clsx(
                  e.active
                    ? "bg-sky-200 dark:bg-knut-dark-tag"
                    : "bg-gray-200 dark:bg-slate-600",
                  "select-none dark:text-knut-dark-text text-knut-light-text rounded-xl py-1 px-3 cursor-pointer"
                )}
                onClick={() => {
                  setSearchTags([
                    ...searchTags.filter((x) => x.tag !== e.tag),
                    { ...e, active: !e.active },
                  ]);
                }}
              >
                {e.tag}
              </div>
            ))}
        </ScrollContainer>
        <input
          className="px-4 py-1 w-full text-knut-light-text rounded-xl  my-4 border-black border-2"
          type={"text"}
          value={searchTerm}
          placeholder={"zinc exercise"}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
      <div
        className="grid auto-rows-max gap-4"
        style={{
          gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",
        }}
      >
        {filteredExercises
          .sort((a, b) => a.name.localeCompare(b.name))
          .filter(filterLogic)
          .map((exercise) => (
            <ExercisePreview key={exercise.slug} {...exercise} />
          ))}
      </div>
    </PageLayout>
  );
}

export const getStaticProps: GetStaticProps<{
  exercises: IUIExercise[];
}> = async () => {
  const exercises = await getExercises();
  return {
    props: {
      exercises: exercises.items.map(({ fields }) => {
        return {
          ...fields,
          image: fields.image.fields.file
            ? `https:${fields.image.fields.file.url}`
            : placeHolderImage,
          tags: fields.tags ?? [],
        };
      }),
    },
    revalidate: 600,
  };
};
