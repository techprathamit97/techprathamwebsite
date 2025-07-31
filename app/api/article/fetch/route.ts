import { NextResponse } from "next/server";
import connectMongo from '@/utils/mongodb.js';
import { Article } from '@/models/article.js';

export async function GET() {
  try {
    await connectMongo();
    const article = await Article.find();
    const revArticles = article.reverse();
    const response = NextResponse.json(revArticles);

    return response;
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export const dynamic = "force-dynamic";
