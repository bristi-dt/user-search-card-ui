const users = [

    {
        name: "Aarav Sharma",
        pic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        bio: "Frontend developer who enjoys building responsive and modern web interfaces."
    },

    {
        name: "Ananya Das",
        pic: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        bio: "UI/UX designer passionate about clean layouts and user-friendly experiences."
    },

    {
        name: "Rohan Mehta",
        pic: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
        bio: "Full stack developer working with JavaScript, Node.js and databases."
    },

    {
        name: "Sneha Roy",
        pic: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        bio: "Creative graphic designer who loves minimal design and digital art."
    },

    {
        name: "Karan Patel",
        pic: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
        bio: "Backend developer focusing on APIs, databases and scalable systems."
    },

    {
        name: "Ishita Verma",
        pic: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
        bio: "Content creator and blogger sharing ideas about tech and productivity."
    },


    {
        name: "Aditya Singh",
        pic: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
        bio: "Software engineering student passionate about web development."
    },
    {
        name: "Rahul Khanna",
        pic: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800",
        bio: "Frontend engineer passionate about building smooth and responsive web interfaces."
    },

    {
        name: "Priya Kapoor",
        pic: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=800",
        bio: "UI designer who focuses on minimal layouts and strong visual hierarchy."
    },

    {
        name: "Arjun Nair",
        pic: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800",
        bio: "Backend developer experienced with APIs, databases and server architecture."
    },

    {
        name: "Meera Iyer",
        pic: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800",
        bio: "Creative designer who loves digital illustration and modern UI design."
    },

    {
        name: "Vikram Singh",
        pic: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800",
        bio: "Software engineer exploring scalable web systems and cloud technologies."
    },

    {
        name: "Neha Agarwal",
        pic: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800",
        bio: "Content creator sharing tutorials about design, productivity and tech."
    },

    {
        name: "Kunal Verma",
        pic: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
        bio: "Full stack developer who enjoys building JavaScript applications."
    },

    {
        name: "Ritika Sen",
        pic: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
        bio: "Digital artist and designer who loves experimenting with color and layout."
    },

    {
        name: "Dev Malhotra",
        pic: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800",
        bio: "Backend specialist working with databases, APIs and microservices."
    },

    {
        name: "Aisha Khan",
        pic: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800",
        bio: "Tech enthusiast and blogger writing about web development and startups."
    },
    {
        name: "Devansh Kulkarni",
        pic: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg",
        bio: "Frontend developer who enjoys crafting fast and accessible web interfaces."
    },

    {
        name: "Ritika Sharma",
        pic: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
        bio: "UI designer focused on modern layouts and strong visual design."
    },

    {
        name: "Manish Yadav",
        pic: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
        bio: "Full stack developer building scalable JavaScript applications."
    },

    {
        name: "Pallavi Desai",
        pic: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg",
        bio: "Creative designer passionate about branding and digital illustration."
    },

    {
        name: "Sahil Arora",
        pic: "https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg",
        bio: "Backend developer interested in APIs and database architecture."
    },

    {
        name: "Kritika Jain",
        pic: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg",
        bio: "UX researcher exploring user behaviour and interface usability."
    },

    {
        name: "Varun Bhatia",
        pic: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
        bio: "Software engineer exploring cloud computing and scalable systems."
    },

    {
        name: "Nikita Sinha",
        pic: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg",
        bio: "Digital creator sharing design inspiration and productivity ideas."
    },

    {
        name: "Raghav Tiwari",
        pic: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
        bio: "JavaScript enthusiast building interactive frontend experiences."
    },

    {
        name: "Isha Chatterjee",
        pic: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
        bio: "Graphic designer who loves minimal design and creative layouts."
    }


];

let cards = document.querySelector(".cards");
function showUsers(arr) {

    arr.forEach(user => {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = user.pic;
        img.classList.add("bg-img");

        const blurredlayer = document.createElement("div");
        blurredlayer.style.backgroundImage = `url(${user.pic})`;
        blurredlayer.classList.add("blurred-layer");

        const content = document.createElement("div");
        content.classList.add("content");

        const h3 = document.createElement("h3");
        h3.textContent = user.name;
        const p = document.createElement("p");
        p.textContent = user.bio;

        content.appendChild(h3);
        content.appendChild(p);
        card.appendChild(img);
        card.appendChild(blurredlayer);
        card.appendChild(content);

        cards.appendChild(card);
    });
} showUsers(users);

let inp = document.querySelector("input");
inp.addEventListener("input", function () {

    let newUser = users.filter((user) => {
        return user.name.toLowerCase().startsWith(inp.value.toLowerCase().trim());
    });

    cards.innerHTML = "";
    showUsers(newUser);
});