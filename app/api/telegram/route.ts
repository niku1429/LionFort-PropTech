import { NextResponse } from "next/server";

const BOT_TOKEN = "8868329347:AAGuE21LIu58JoE6V7QHGpwbjFkuq4qX0WI";

const CHAT_ID = "-5563363209";

export async function POST(req: Request) {

    const { name, phone, email } = await req.json();

    const text = `
📩 New Lead Received

👤 Name: ${name}

📞 Phone: ${phone}

📧 Email: ${email}
`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    await fetch(url, {

        method: "POST",

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({

            chat_id: CHAT_ID,

            text,
        }),
    });

    return NextResponse.json({
        success: true,
    });
}