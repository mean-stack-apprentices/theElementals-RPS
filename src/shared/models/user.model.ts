export interface User {
    _id?: string,
    username: string,
    password?: string,
    profilePic?: {
        picId: any,
        filename: string
    }
}