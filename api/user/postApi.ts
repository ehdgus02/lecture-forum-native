import axiosInstance from "@/api/axiosInstance";
import { PaginationResponseType } from "@/types/common";
import { PostListItemType, Post } from "@/types/post";
import { PostInputType } from "@/schemas/post/postSchema";

const getPostsByCategory = async (
    categoryId: number,
    page: number,
    size: number,
): Promise<PaginationResponseType<PostListItemType>> => {
    const response = await axiosInstance.get(`/post/list/${categoryId}`, {
        params: {
            page,
            size,
        },
    });
    return response.data.data;
};

const createPost = async (input: PostInputType): Promise<Post> => {
    const response = await axiosInstance.post("/post/create", input);
    return response.data.data;
};

export default {
    getPostsByCategory,
    createPost,
};
