const testimonials = [
  {
    name: 'Mr Wizzobang',
    role: 'Head of Commercial Ops at Pi² Network',
    feedback:
      'Working with Abdulmalik was a pleasure. He delivered the Pi² Explorer with speed, precision, and excellent design sense. Highly recommend!',
  },
  {
    name: 'Michael Olu',
    role: 'Founder of NaijaFlex',
    feedback:
      'Abdulmalik brought our ecommerce vision to life with NaijaFlex. His frontend skills and attention to local market needs stood out.',
  },
  {
    name: 'Zoe Chen',
    role: 'Community moderator at Sign Gallery',
    feedback:
      'He understood our idea from day one and built an elegant, responsive gallery that worked perfectly. Fast, focused, and reliable.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-950 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 mb-10">
          Testimonials
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-emerald-500/40 transform hover:scale-105 transition duration-300"
            >
              <p className="text-gray-300 italic relative pl-8">
                <span className="absolute left-0 top-0 text-3xl text-emerald-400">“</span>
                {testimonial.feedback}
              </p>
              <div className="mt-4 text-sm text-gray-400">
                — <strong className="text-white">{testimonial.name}</strong>, {testimonial.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
