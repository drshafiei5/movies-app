import { httpService } from "@/lib/axios";
import { constants } from "@/utils/constants";
import { NextResponse } from "next/server";
import queryString from "query-string";

interface GetMoviesParams {
    params: {
        page: string;
    };
}

export async function GET(req: Request, { params: { page } }: GetMoviesParams) {
    const queryParams = queryString.stringify({
        count: Number(constants.pageSize),
        offset: (+page - 1) * Number(constants.pageSize),
        order: "latest",
    });

    const { data } = await httpService.get("/video-contents?" + queryParams);

    return NextResponse.json(data);
}
