import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const DISCORD_INVITE_CODE = "mM7esdn";
const DISCORD_INVITE_URL = `https://discord.com/api/v10/invites/${DISCORD_INVITE_CODE}?with_counts=true`;

export async function GET() {
  try {
    const response = await fetch(DISCORD_INVITE_URL, { cache: "no-store" });

    if (!response.ok) {
      return NextResponse.json(
        { onlineCount: null, totalCount: null, error: "Discord API returned an unexpected status." },
        { status: response.status }
      );
    }

    const data = await response.json();
    const onlineCount = typeof data.approximate_presence_count === "number" ? data.approximate_presence_count : null;
    const totalCount = typeof data.approximate_member_count === "number" ? data.approximate_member_count : null;

    return NextResponse.json({ onlineCount, totalCount });
  } catch (error) {
    return NextResponse.json(
      { onlineCount: null, totalCount: null, error: "Failed to fetch Discord data." },
      { status: 500 }
    );
  }
}
