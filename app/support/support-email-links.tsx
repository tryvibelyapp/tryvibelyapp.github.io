"use client";

import { useSearchParams } from "next/navigation";

const featureRequestHref =
  "mailto:contact@moonkata.com?subject=Feature%20Request%20for%20Vibely%20-%20Music%20Visualizer&body=What%20feature%20you%20would%20like%20to%20request%3F%20Be%20specific%20and%20provide%20examples%3A%0D%0A%0D%0ATYPE_HERE%0D%0A%0D%0AAttach%20example%20screenshots%20or%20screen%20recordings%20or%20YouTube%2C%20TikTok%2C%20Instagram%20links%0D%0A";

const generalSupportHref =
  "mailto:contact@moonkata.com?subject=General%20Question%20about%20Vibely%20-%20Music%20Visualizer&body=How%20can%20we%20help%20you%3F%0D%0A%0D%0A___%0D%0A%0D%0APlease%20include%20any%20helpful%20details%2C%20screenshots%2C%20or%20links.";

const bugReportTemplate =
  "mailto:contact@moonkata.com?subject=Bug%20Report%20for%20Vibely%20-%20Music%20Visualizer&body=What%E2%80%99s%20not%20working%20in%20Vibely%20for%20you%3F%20Be%20specific%20and%20provide%20examples%20(attach%20screenshots%20or%20screen%20recordings).%20Steps%20to%20reproduce%20are%20welcomed%20%F0%9F%99%8F%F0%9F%8F%BB%0D%0A%0D%0ATYPE_HERE%0D%0A%0D%0AApp%20version%3A%20APP_VERSION%0D%0AOS%20version%3A%20OS_VERSION%0D%0A";

export default function SupportEmailLinks() {
  const params = useSearchParams();
  const appVersion = params.get("app_version") || "";
  const osVersion = params.get("os_version") || "";

  let bugReportHref = bugReportTemplate
    .replaceAll("APP_VERSION", appVersion)
    .replaceAll("OS_VERSION", osVersion);

  if (!appVersion) {
    bugReportHref = bugReportHref.replace(
      "App%20version%3A%20%0D%0A",
      "App%20version%3A%20",
    );
  }
  if (!osVersion) {
    bugReportHref = bugReportHref.replace(
      "OS%20version%3A%20%0D%0A",
      "OS%20version%3A%20",
    );
  }

  return (
    <>
      {appVersion && osVersion && (
        <p>
          App version: {appVersion}
          <br />
          OS version: {osVersion}
        </p>
      )}
      <p className="max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
        Pick one of the email templates below so we can help faster:
      </p>
      <ul className="max-w-2xl list-disc ml-6 space-y-2 text-base leading-7 text-zinc-600 dark:text-zinc-400">
        <li>
          <a
            className="underline underline-offset-4 hover:opacity-80"
            href={featureRequestHref}
          >
            Feature request
          </a>
        </li>
        <li>
          <a
            className="underline underline-offset-4 hover:opacity-80"
            href={bugReportHref}
          >
            Bug report
          </a>
        </li>
        <li>
          <a
            className="underline underline-offset-4 hover:opacity-80"
            href={generalSupportHref}
          >
            General support
          </a>
        </li>
      </ul>
    </>
  );
}
