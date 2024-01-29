const blogs = [
  {
    userId: 1,
    id: 1,
    title: "First Blog Post",
    body: "This is the content of the first blog post.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias nisi at earum similique doloremque hic quae eaque? Consectetur quis eos, ratione architecto odio veritatis vel, culpa deleniti voluptas fuga placeat!",
    image: "https://picsum.photos/600/300",
  },
  {
    userId: 2,
    id: 2,
    title: "Second Blog Post",
    body: "This is the content of the first blog post.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias nisi at earum similique doloremque hic quae eaque? Consectetur quis eos, ratione architecto odio veritatis vel, culpa deleniti voluptas fuga placeat!",
    image: "https://picsum.photos/600/300",
  },
  {
    userId: 3,
    id: 3,
    title: "Third Blog Post",
    body: "This is the content of the first blog post.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias nisi at earum similique doloremque hic quae eaque? Consectetur quis eos, ratione architecto odio veritatis vel, culpa deleniti voluptas fuga placeat!",
    image: "https://picsum.photos/600/300",
  },
  {
    userId: 4,
    id: 4,
    title: "Forth Blog Post",
    body: "This is the content of the first blog post.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias nisi at earum similique doloremque hic quae eaque? Consectetur quis eos, ratione architecto odio veritatis vel, culpa deleniti voluptas fuga placeat!",
    image: "https://picsum.photos/600/300",
  },
  {
    userId: 5,
    id: 5,
    title: "Fifth Blog Post",
    body: "This is the content of the first blog post.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias nisi at earum similique doloremque hic quae eaque? Consectetur quis eos, ratione architecto odio veritatis vel, culpa deleniti voluptas fuga placeat!",
    image: "https://picsum.photos/600/300",
  },
  {
    userId: 6,
    id: 6,
    title: "Sixth Blog Post",
    body: "This is the content of the first blog post.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias nisi at earum similique doloremque hic quae eaque? Consectetur quis eos, ratione architecto odio veritatis vel, culpa deleniti voluptas fuga placeat!",
    image: "https://picsum.photos/600/300",
  },
  {
    userId: 7,
    id: 7,
    title: "Seventh Blog Post",
    body: "This is the content of the first blog post.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias nisi at earum similique doloremque hic quae eaque? Consectetur quis eos, ratione architecto odio veritatis vel, culpa deleniti voluptas fuga placeat!",
    image: "https://picsum.photos/600/300",
  },
  {
    userId: 8,
    id: 8,
    title: "Eighth Blog Post",
    body: "This is the content of the first blog post.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias nisi at earum similique doloremque hic quae eaque? Consectetur quis eos, ratione architecto odio veritatis vel, culpa deleniti voluptas fuga placeat!",
    image: "https://picsum.photos/600/300",
  },
  {
    userId: 9,
    id: 9,
    title: "Nineth Blog Post",
    body: "This is the content of the first blog post.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias nisi at earum similique doloremque hic quae eaque? Consectetur quis eos, ratione architecto odio veritatis vel, culpa deleniti voluptas fuga placeat!",
    image: "https://picsum.photos/600/300",
  },
  {
    userId: 10,
    id: 10,
    title: "Tenth Blog Post",
    body: "This is the content of the first blog post.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias nisi at earum similique doloremque hic quae eaque? Consectetur quis eos, ratione architecto odio veritatis vel, culpa deleniti voluptas fuga placeat!",
    image: "https://picsum.photos/600/300",
  },
];

const comments = [
  // Comment 1
  {
    blogId: 1,
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    body: "Great post!",
  },
  // Comment 2
  {
    blogId: 1,
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    body: "I enjoyed reading this.",
  },
  // Comment 3
  {
    blogId: 2,
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
    body: "Interesting thoughts.",
  },
  // Comment 4
  {
    blogId: 3,
    id: 4,
    name: "Bob Anderson",
    email: "bob@example.com",
    body: "Looking forward to more posts.",
  },
  // Comment 5
  {
    blogId: 4,
    id: 5,
    name: "Eva Wilson",
    email: "eva@example.com",
    body: "Well written!",
  },
  // Comment 6
  {
    blogId: 5,
    id: 6,
    name: "Michael Johnson",
    email: "michael@example.com",
    body: "This is fantastic!",
  },
  // Comment 7
  {
    blogId: 6,
    id: 7,
    name: "Olivia White",
    email: "olivia@example.com",
    body: "Great insights!",
  },
  // Comment 8
  {
    blogId: 7,
    id: 8,
    name: "Charlie Brown",
    email: "charlie@example.com",
    body: "Awesome post!",
  },
  // Comment 9
  {
    blogId: 8,
    id: 9,
    name: "Sophia Davis",
    email: "sophia@example.com",
    body: "Very informative!",
  },
  // Comment 10
  {
    blogId: 9,
    id: 10,
    name: "Matthew Wilson",
    email: "matthew@example.com",
    body: "Keep it up!",
  },
  // Comment 11
  {
    blogId: 1,
    id: 11,
    name: "Emma Harris",
    email: "emma@example.com",
    body: "Impressive content!",
  },
  // Comment 12
  {
    blogId: 2,
    id: 12,
    name: "Aiden Thomas",
    email: "aiden@example.com",
    body: "Well written!",
  },
  // Comment 13
  {
    blogId: 3,
    id: 13,
    name: "Grace Turner",
    email: "grace@example.com",
    body: "Enjoyed every bit of it!",
  },
  // Comment 14
  {
    blogId: 4,
    id: 14,
    name: "Henry Martinez",
    email: "henry@example.com",
    body: "Insightful thoughts!",
  },
  // Comment 15
  {
    blogId: 5,
    id: 15,
    name: "Lily Clark",
    email: "lily@example.com",
    body: "Keep sharing!",
  },
  // Comment 16
  {
    blogId: 6,
    id: 16,
    name: "Oliver Adams",
    email: "oliver@example.com",
    body: "Great insights!",
  },
  // Comment 17
  {
    blogId: 7,
    id: 17,
    name: "Chloe Lewis",
    email: "chloe@example.com",
    body: "Wonderful read!",
  },
  // Comment 18
  {
    blogId: 8,
    id: 18,
    name: "Zachary Turner",
    email: "zachary@example.com",
    body: "Enjoyable content!",
  },
  // Comment 19
  {
    blogId: 9,
    id: 19,
    name: "Madison Brown",
    email: "madison@example.com",
    body: "Well articulated!",
  },
  // Comment 20
  {
    blogId: 10,
    id: 20,
    name: "Ethan White",
    email: "ethan@example.com",
    body: "Fascinating thoughts!",
  },

  // Comment 21
  {
    blogId: 1,
    id: 21,
    name: "Emma Garcia",
    email: "emma@example.com",
    body: "Impressive post!",
  },
  // Comment 22
  {
    blogId: 2,
    id: 22,
    name: "Liam Taylor",
    email: "liam@example.com",
    body: "Thought-provoking!",
  },
  // Comment 23
  {
    blogId: 3,
    id: 23,
    name: "Ava Martinez",
    email: "ava@example.com",
    body: "Well done!",
  },
  // Comment 24
  {
    blogId: 4,
    id: 24,
    name: "Noah Hernandez",
    email: "noah@example.com",
    body: "Captivating read!",
  },
  // Comment 25
  {
    blogId: 5,
    id: 25,
    name: "Sophia Mitchell",
    email: "sophia@example.com",
    body: "Enjoyed every bit!",
  },
  // Comment 26
  {
    blogId: 6,
    id: 26,
    name: "Jackson Davis",
    email: "jackson@example.com",
    body: "Insightful!",
  },
  // Comment 27
  {
    blogId: 7,
    id: 27,
    name: "Olivia Miller",
    email: "olivia@example.com",
    body: "Well articulated!",
  },
  // Comment 28
  {
    blogId: 8,
    id: 28,
    name: "Lucas Jones",
    email: "lucas@example.com",
    body: "Great perspective!",
  },
  // Comment 29
  {
    blogId: 9,
    id: 29,
    name: "Lily White",
    email: "lily@example.com",
    body: "Engaging content!",
  },
  // Comment 30
  {
    blogId: 10,
    id: 30,
    name: "Aiden Harris",
    email: "aiden@example.com",
    body: "Fascinating!",
  },
  // Comment 31
  {
    blogId: 1,
    id: 31,
    name: "Sophie Moore",
    email: "sophie@example.com",
    body: "Thought-provoking!",
  },
  // Comment 32
  {
    blogId: 2,
    id: 32,
    name: "Ethan Turner",
    email: "ethan@example.com",
    body: "Enjoyed the read!",
  },
  // Comment 33
  {
    blogId: 3,
    id: 33,
    name: "Zoe Evans",
    email: "zoe@example.com",
    body: "Informative content!",
  },
  // Comment 34
  {
    blogId: 4,
    id: 34,
    name: "Mason Baker",
    email: "mason@example.com",
    body: "Well-written!",
  },
  // Comment 35
  {
    blogId: 5,
    id: 35,
    name: "Ava Murphy",
    email: "ava@example.com",
    body: "Interesting thoughts!",
  },
  // Comment 36
  {
    blogId: 6,
    id: 36,
    name: "Liam Garcia",
    email: "liam@example.com",
    body: "Great insights!",
  },
  // Comment 37
  {
    blogId: 7,
    id: 37,
    name: "Aria Foster",
    email: "aria@example.com",
    body: "Enjoyable content!",
  },
  // Comment 38
  {
    blogId: 8,
    id: 38,
    name: "Logan Perry",
    email: "logan@example.com",
    body: "Well-articulated!",
  },
  // Comment 39
  {
    blogId: 9,
    id: 39,
    name: "Harper Butler",
    email: "harper@example.com",
    body: "Impressive post!",
  },
  // Comment 40
  {
    blogId: 10,
    id: 40,
    name: "Evelyn Turner",
    email: "evelyn@example.com",
    body: "Insightful read!",
  },
];

module.exports = {
  blogs: blogs,
  comments: comments,
};
