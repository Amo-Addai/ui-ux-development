const testimonials = [
    {
        name: 'John Doe', position: 'Tech',
        photo: 'https://source.unsplash.com/random150x150',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugiat, libero delectus natus blanditiis quis praesentium a eaque et corporis accusantium ipsa facere reprehenderit fugit? Similique nemo quaerat vitae a voluptatum beatae alias natus quod eligendi architecto. Maxime nisi possimus adipisci suscipit, quis quisquam! Expedita possimus necessitatibus alias, officiis magnam, dolorem eos veniam praesentium debitis sit quia nam facilis molestiae voluptatem ipsam natus minus maiores vero? Quos veniam, aut nulla illo, commodi, dolores temporibus cumque sapiente nihil consequatur quaerat eius numquam. Odit nam consectetur, fuga reprehenderit eos, accusamus modi placeat aut ipsa, nisi provident dolores adipisci! Dolor voluptatum aut impedit.'
    },
    {
        name: 'Jane Doe', position: 'Marketing',
        photo: 'https://source.unsplash.com/random150x150',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugiat, libero delectus natus blanditiis quis praesentium a eaque et corporis accusantium ipsa facere reprehenderit fugit? Similique nemo quaerat vitae a voluptatum beatae alias natus quod eligendi architecto. Maxime nisi possimus adipisci suscipit, quis quisquam! Expedita possimus necessitatibus alias, officiis magnam, dolorem eos veniam praesentium debitis sit quia nam facilis molestiae voluptatem ipsam natus minus maiores vero? Quos veniam, aut nulla illo, commodi, dolores temporibus cumque sapiente nihil consequatur quaerat eius numquam. Odit nam consectetur, fuga reprehenderit eos, accusamus modi placeat aut ipsa, nisi provident dolores adipisci! Dolor voluptatum aut impedit.'
    },
]

const container = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const user = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

let i = 0

setInterval(updateTestimonial, 10000) // 10s, to match .progress-bar { animation: grow 10s linear infinite; }

function updateTestimonial() {
    const { name, position, photo, text } = testimonials[i]
    testimonial.innerHTML = text
    user.src = photo
    username.innerHTML = name
    role.innerHTML = position
    i++
    if (i > testimonials.length - 1) i = 0
}