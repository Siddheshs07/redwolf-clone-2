import dbConnect from "@/utils/connectDB";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();

  const products = await Product.find({});

  try {
    return NextResponse.json(products);
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}

export async function POST(request: Request) {
  await dbConnect();
  const body = await request.json();
  const product = new Product(body);
  try {
    await product.save();
    return NextResponse.json(product);
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
