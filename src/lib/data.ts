interface Reply {
  text: string;
  author: {
    name: string;
    image: string;
  };
  date: string;
}

export interface Comment {
  description: string;
  commenter: {
    name: string;
    image: string;
  };
  like?: number;
  replies?: Reply[];
  date: string;
}

export interface Post {
  id: string;
  description?: string;
  slug: string;
  thumbnail?: string;
  author: {
    name: string;
    image: string;
  };
  createdAt: string;
  comments?: Comment[];
  likes: number;
  views: number;
}

export const post: Post[] = [
  {
    id: "001",
    description: "First Post",
    slug: "first-post",
    thumbnail: "/images/scene-1.jpg",
    author: {
      name: "Cliffer Smith",
      image: "/images/author-3.jpg",
    },
    createdAt: "2022-01-01",
    comments: [
      {
        description: "Some comment in 2025",
        like: 35,
        date: "25:09:22",
        commenter: {
          name: "jane Doe",
          image: "/images/author-3.jpg",
        },
        replies: [],
      },
      {
        description: "Some comment in 2026",
        like: 35,
        date: "25:09:22",
        commenter: {
          name: "jane Doe",
          image: "/images/author-3.jpg",
        },
        replies: [],
      },
    ],
    likes: 10,
    views: 100,
  },
  {
    id: "002",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque modi architecto quasi eum quas quo, sint dolor commodi velit magni expedita, omnis iste laborum nobis, eius vero harum accusantium ab hic rem assumenda ipsam. Qui, molestias dolor eveniet incidunt eligendi molestiae fugit nam fugiat velit ad non aliquam. Perspiciatis in doloremque explicabo hic eos a enim commodi laborum odio facilis.",
    slug: "second-post",
    thumbnail: "/images/scene-2.jpg",
    author: {
      name: "Jack Man",
      image: "/images/author-2.jpg",
    },
    createdAt: "2022-01-01",
    comments: [
      {
        description: "Some comment in 2027",
        date: "25:09:22",
        commenter: {
          name: "jane Doe",
          image: "/images/author-3.jpg",
        },
        replies: [],
      },
      {
        description: "Some comment in 2028",
        date: "25:09:22",
        commenter: {
          name: "jane Doe",
          image: "/images/author-3.jpg",
        },
        replies: [
          {
            author: {
              name: "jane Doe",
              image: "/images/author-3.jpg",
            },
            text: "yes cool",
            date: "03:09:23",
          },
        ],
      },
    ],
    likes: 110,
    views: 1000,
  },
  {
    id: "003",
    description:
      "expedita, omnis iste laborum nobis, eius vero harum accusantium ab hic rem assumenda ipsam. Qui, molestias dolor eveniet incidunt eligendi molestiae fugit nam fugiat velit ad non aliquam. Perspiciatis in doloremque explicabo hic eos a enim commodi laborum odio facilis",
    slug: "third-post",
    thumbnail: "/images/scene-3.jpg",
    author: {
      name: "Browne Moore",
      image: "/images/author-1.jpg",
    },
    createdAt: "2022-01-01",
    comments: [],
    likes: 120,
    views: 1100,
  },
  {
    id: "004",
    description:
      "omnis iste laborum nobis, eius vero harum accusantium ab hic rem assumenda ipsam. Qui, molestias dolor eveniet incidunt eligendi molestiae fugit nam fugiat velit ad non aliquam. Perspiciatis in doloremque explicabo hic eos a enim commodi laborum odio facilis",
    slug: "fourth-post",
    thumbnail: "/images/scene-4.jpg",
    author: {
      name: "John Smith",
      image: "/images/author-2.jpg",
    },
    createdAt: "2022-01-01",
    comments: [],
    likes: 120,
    views: 1100,
  },
  {
    id: "005",
    description: "Fifth Post",
    slug: "fifth-post",
    thumbnail: "/images/scene-5.jpg",
    author: {
      name: "Jane Doe",
      image: "/images/author-3.jpg",
    },
    createdAt: "2022-01-01",
    comments: [],
    likes: 120,
    views: 1100,
  },
];
