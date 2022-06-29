import IPost from "./IPost";

export default interface IGetAllPosts {
    data: IPost[];
    status: number;
}