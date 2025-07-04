import { useEffect, useState } from "react"
import axios from "axios"
import { blogListState, singleBlogState } from "../atom/blog"
import { useRecoilState } from "recoil"

export const useBlogs = () => {
    const [loading, setLoading] = useState(true)
    const [blogs, setBlogs] = useRecoilState(blogListState)
    console.log("useBlogs useEffect running");
    console.log("Token:", localStorage.getItem("token"));

    useEffect(() => {
        if (blogs && blogs.length > 0) {
            setLoading(false)
            return
        }
        let cancelled = false
        axios.get("http://127.0.0.1:8787/api/v1/blog/bulk", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then((res) => {
            if (!cancelled) {
                setBlogs(res.data.blogs)
                setLoading(false)
            }
        })
        return () => { cancelled = true; }
    }, [])

    return { loading, blogs }
}  



export const useSingleBlog = (id: string) => {
    const [loading, setLoading] = useState(true);
    const [singleBlog, setSingleBlog] = useRecoilState(singleBlogState);

    useEffect(() => {
        if (!id) return; // Don't fetch if id is empty
        setLoading(true);
        setSingleBlog({ date: "", id: "", authorName: "", title: "", content: "" }); // Optionally reset state
        let cancelled = false;
        axios.get(`http://127.0.0.1:8787/api/v1/blog/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then((res) => {
            if (!cancelled) {
                setSingleBlog(res.data.blog);
                setLoading(false);
            }
        });
        return () => { cancelled = true; };
    }, [id]); // Only run when id changes

    return { loading, singleBlog };
}

export const useCreateBlog = () => {
    const [loading, setLoading] = useState(false);

    const createBlog = async (title: string, content: string) => {
        try {
            setLoading(true);
            const response = await axios.post("http://127.0.0.1:8787/api/v1/blog", {
                title,
                content
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            setLoading(false);
            return response.data;
        } catch (error) {
            setLoading(false);
            throw error;
        }
    };

    return { createBlog, loading };
}