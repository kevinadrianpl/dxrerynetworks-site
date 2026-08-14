import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const SERVER_HOSTNAME = "play.dxrery.top";
const SERVER_STATUS_URL = `https://api.mcstatus.io/v2/status/java/${SERVER_HOSTNAME}`;

export async function GET() {
  try {
    const response = await fetch(SERVER_STATUS_URL, {
      cache: "no-store",
      headers: {
        "User-Agent": "dxrery-website/1.0",
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { online: null, onlineCount: null, maxCount: null, error: "Status API returned an unexpected status." },
        { status: response.status }
      );
    }

    const data = await response.json();
    const online = typeof data.online === "boolean" ? data.online : null;
    const onlineCount = typeof data.players?.online === "number" ? data.players.online : null;
    const maxCount = typeof data.players?.max === "number" ? data.players.max : null;

    return NextResponse.json({ online, onlineCount, maxCount });
  } catch {
    return NextResponse.json(
      { online: null, onlineCount: null, maxCount: null, error: "Failed to fetch server status." },
      { status: 500 }
    );
  }
}
