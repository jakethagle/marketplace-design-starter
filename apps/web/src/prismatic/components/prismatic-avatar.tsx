import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/loading-spinner";
import usePrismaticAuth from "../hooks/use-prismatic";

async function fetchImage(
  avatarUrl: unknown,
  token: string
): Promise<{ url: string }> {
  const response = await fetch(
    `https://app.prismatic.io${avatarUrl as string}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = (await response.json()) as { url: string };
  // eslint-disable-next-line no-console -- testing
  console.log(data);
  return data as { url: string };
}
/**
 * This component is used to display the avatar for a marketplace integration.
 * Icons are used if the integration does not have an avatar.
 * Images are fetched from a presigned S3 URL.
 */
export function PrismaticAvatar({ avatarUrl }: { avatarUrl: unknown }) {
  const [src, setSrc] = useState("");
  const { authenticated, token } = usePrismaticAuth();
  useEffect(() => {
    // eslint-disable-next-line no-console -- testing
    console.log(avatarUrl, authenticated, token);
    if (avatarUrl && authenticated && token) {
      void fetchImage(avatarUrl, token)
        .then((data) => {
          setSrc(data.url);
        })
        .catch((error) => {
          setSrc("");
          // eslint-disable-next-line no-console -- testing
          console.error(error);
        });
    }
  }, [authenticated, avatarUrl, token]);

  return src ? (
    <img alt={src} className="object-contain object-center" src={src} />
  ) : (
    <LoadingSpinner />
  );
}
