interface MoviesRes {
    data: Movie[];
    meta: Meta;
}

interface Meta {
    total_items_count: number;
    remaining_items_count: number;
    next_url: string;
    operation_result: string;
    operation_result_code: number;
    client_ip: string;
    display_message: string;
    server_date_time: string;
    machine_name: string;
}

interface Movie {
    rate: number;
    age_restriction: string;
    categories: Category[];
    published_at: string;
    status: string;
    title: string;
    page_title: string;
    slug: string;
    summary: string;
    cover_image: Image;
    poster_image: Image;
    logo_image?: Image;
    alter_cover_image: Image;
    type: string;
    flag: string;
    conditional_flag: string;
    year: number;
    imdb_rank_percent: number;
    original_name: string;
    duration?: string;
    video_files: Videofiles;
    video_content_access_approach: string;
    id: string;
    short_id: string;
}

interface Videofiles {
    primary: string[];
    trailers: string[];
}

interface Image {
    path: string;
}

interface Category {
    type: string;
    items: CategoryItem[];
}

interface CategoryItem {
    title: string;
}
