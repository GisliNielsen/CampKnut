import type { NextPage } from "next";
import Image from "next/image";
import { tips } from "../content/text";
import Link from "next/link";
import Important from "../components/ui/Important";
import Participants from "../components/mainPage/Participants";
import Introduction from "../components/mainPage/Introduction";
import CustomLink from "../components/ui/CustomLink";
import PageLayout from "../components/layout/PageLayout";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <article>
        <div>
          <Image
            src="/CampKnut.webp"
            alt="Camp Knut"
            width={2560}
            height={1450}
            priority={true}
            decoding="async"
            className="aspect-auto"
          />

          <Introduction />

          <Participants />

          <Important>
            <p>💡 {tips.knowYourLimits}</p>
          </Important>

          <Important>
            <p>💡 {tips.supplements}</p>
          </Important>

          <div className="flex">
            <div className="w-1/2">
              <h1 className="text-2xl font-black mt-4 text-knut-light-header dark:text-knut-dark-header mb-2">
                🥩 Meal Plans
              </h1>
              <p>
                <CustomLink
                  href={
                    "https://docs.google.com/spreadsheets/d/1Fto6sArnx-lBoxXyFEC3cLCbVQkJdwT9-JsPD9Agra8/edit?usp=sharing"
                  }
                  type={"a"}
                  darkColor={"dark:text-knut-dark-header"}
                  lightColor={"text-knut-light-header"}
                >
                  OTK Meal plans
                </CustomLink>
              </p>
              <p>
                <CustomLink
                  href={"https://bit.ly/3vil5en"}
                  type={"a"}
                  darkColor={"dark:text-knut-dark-header"}
                  lightColor={"text-knut-light-header"}
                >
                  Mizkif meal plan with supplements
                </CustomLink>
              </p>
              <p>
                <CustomLink
                  href={"https://bit.ly/3cReLVb"}
                  type={"a"}
                  darkColor={"dark:text-knut-dark-header"}
                  lightColor={"text-knut-light-header"}
                >
                  Mizkif meal plan without eggs and supplements
                </CustomLink>
              </p>
            </div>

            <div className="w-1/2">
              <h1 className="text-2xl font-black mt-4 text-knut-light-header dark:text-knut-dark-header">
                💖 Community
              </h1>
              <p>
                <CustomLink
                  href={""}
                  type={"Link"}
                  darkColor={"dark:text-knut-dark-header"}
                  lightColor={"text-knut-light-header"}
                >
                  <>
                    {" "}
                    Amazon Supplements by <strong>WakeWilder</strong>{" "}
                  </>
                </CustomLink>
              </p>

              <p>
                <CustomLink
                  href={""}
                  type={"Link"}
                  darkColor={"dark:text-knut-dark-header"}
                  lightColor={"text-knut-light-header"}
                >
                  <>
                    {" "}
                    Stream workout log - Maintained by <strong>
                      DrStone
                    </strong>{" "}
                  </>
                </CustomLink>
              </p>

              <p>
                📀{" "}
                <CustomLink
                  href={
                    "https://open.spotify.com/playlist/0bNUdcAFj5Un6XNKZ5Xora?si=e5e3832466244996"
                  }
                  type={"a"}
                  darkColor={"dark:text-knut-dark-header"}
                  lightColor={"text-knut-light-header"}
                >
                  <>
                    {" "}
                    Camp Knut Gym Playlist - Maintained by{" "}
                    <strong>Tahtooz</strong>{" "}
                  </>
                </CustomLink>
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="w-1/2">
              <h1 className="text-2xl font-black mt-4 text-knut-light-header dark:text-knut-dark-header mb-2">
                📕 Plans
              </h1>
              <p>
                <CustomLink
                  href={""}
                  type={"Link"}
                  darkColor={"dark:text-knut-dark-header"}
                  lightColor={"text-knut-light-header"}
                >
                  Workout Beginner
                </CustomLink>
              </p>
              <p>
                <CustomLink
                  href={""}
                  type={"Link"}
                  darkColor={"dark:text-knut-dark-header"}
                  lightColor={"text-knut-light-header"}
                >
                  Workout plan Week 1
                </CustomLink>
              </p>
              <p>
                <CustomLink
                  href={""}
                  type={"Link"}
                  darkColor={"dark:text-knut-dark-header"}
                  lightColor={"text-knut-light-header"}
                >
                  Workout plan Week 2
                </CustomLink>
              </p>
              <p>
                <CustomLink
                  href={"/exercises"}
                  type={"Link"}
                  darkColor={"dark:text-knut-dark-header"}
                  lightColor={"text-knut-light-header"}
                >
                  Exercises
                </CustomLink>
              </p>
            </div>
            <div className="w-1/2">
              <h1 className="text-2xl font-black mt-4 text-knut-light-header dark:text-knut-dark-header mb-2">
                🛠️ Tools
              </h1>
              <p className="text-knut-light-header dark:text-knut-dark-header">
                MyFitnessPal{" "}
                <CustomLink
                  href={
                    "https://apps.apple.com/us/app/myfitnesspal-calorie-counter/id341232718"
                  }
                  type={"a"}
                  darkColor={"dark:text-knut-dark-header"}
                  lightColor={"text-knut-light-header"}
                >
                  iOS
                </CustomLink>{" "}
                /{" "}
                <CustomLink
                  href={
                    "https://play.google.com/store/apps/details?id=com.myfitnesspal.android&amp;hl=en&amp;gl=US"
                  }
                  type={"a"}
                  darkColor={"dark:text-knut-dark-header"}
                  lightColor={"text-knut-light-header"}
                >
                  Android
                </CustomLink>
              </p>
              <p>
                <CustomLink
                  href={"https://www.bodybuilding.com/fun/bmr_calculator.htm"}
                  type={"a"}
                  darkColor={"dark:text-knut-dark-header"}
                  lightColor={"text-knut-light-header"}
                >
                  BMR Calculator
                </CustomLink>
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="w-1/2">
              <h1 className="text-2xl font-black mt-4 text-knut-light-header dark:text-knut-dark-header mb-2">
                📈 Progress
              </h1>
              <p>
                <CustomLink
                  href={""}
                  type={"Link"}
                  darkColor={"dark:text-knut-dark-header"}
                  lightColor={"text-knut-light-header"}
                >
                  Camp Knut - Calendar
                </CustomLink>
              </p>

              <p>
                <CustomLink
                  href={""}
                  type={"Link"}
                  darkColor={"dark:text-knut-dark-header"}
                  lightColor={"text-knut-light-header"}
                >
                  Weekly results
                </CustomLink>
              </p>
            </div>
            <div className="w-1/2">
              <h1 className="text-2xl font-black mt-4 text-knut-light-header dark:text-knut-dark-header mb-2">
                📃 Articles
              </h1>
              <p>
                <CustomLink
                  href={"https://physiqonomics.com/fat-loss/"}
                  type={"a"}
                  darkColor={"dark:text-knut-dark-header"}
                  lightColor={"text-knut-light-header"}
                >
                  The Best Fat Loss Article on the Motherfuckin’ Internet
                </CustomLink>
              </p>
            </div>
          </div>

          <div className="text-center my-20">
            <h3 className="text-xl font-black text-knut-light-header dark:text-knut-dark-header hover:font-black mt-4">
              Want to help out?
            </h3>
            <p>
              <CustomLink
                href={"https://github.com/Bitsnoxx/CampKnut/issues"}
                type={"a"}
                lightColor={"text-knut-light-header"}
                darkColor={"dark:text-knut-dark-header"}
              >
                Roadmap
              </CustomLink>
            </p>
          </div>

          <Important>
            <div className="text-center">
              If you have questions about training - Post them in #camp-knut in
              the{" "}
              <CustomLink
                href={"http://discord.gg/knut"}
                type={"a"}
                darkColor={"dark:text-knut-dark-header"}
                lightColor={"text-knut-light-header"}
              >
                Discord
              </CustomLink>
            </div>
            <div className="text-center">
              Feedback, issues or questions? Contact{" "}
              <strong>Bitsnoxx#1337</strong> on Discord.
            </div>
          </Important>
        </div>
      </article>
    </PageLayout>
  );
};

export default Home;
