import { NextResponse } from "next/server";
import { CoonectDB } from "../../../lib/config/db";
import Todomodel from "../../../lib/models/TodoModel";

const LoadDB= async () => {
    await CoonectDB();
}

LoadDB();

export async function Get(request){
    return NextResponse.json({msg:"get method hit"})
}

export async function POST(request){

    const{title, description} = await request.json();
    await Todomodel.create({
        title,
        description
    })
    return NextResponse.json({msg:"Todo created"})
}

export async function Get(request){
    return NextResponse.json({msg:"get method hit"})
}