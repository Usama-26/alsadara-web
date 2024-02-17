export default function Stats() {
  return (
    <div class="lg:pt-0 stats-bg">
      <div className="bg-gray-900/70">
        <div class="constrained-padded">
          <div className="py-8 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 lg:gap-0 gap-8 text-white text-center">
            <div className=" flex items-center justify-center gap-4 ">
              <div>
                <h1 className="font-display text-4xl">176+</h1>
                <h6 className=" text-sm">Projects Completed</h6>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div>
                <h1 className="font-display text-4xl">1750+</h1>
                <h6 className=" text-sm">Happy Clients</h6>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div>
                <h1 className="font-display text-4xl">230+</h1>
                <h6 className=" text-sm">Qualified Staff</h6>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div>
                <h1 className="font-display text-4xl">30k+</h1>
                <h6 className=" text-sm">Total Man Save Hours</h6>
              </div>
            </div>
            <div className="lg:col-span-1 col-span-2 flex items-center justify-center gap-4">
              <div>
                <h1 className="font-display text-4xl">6</h1>
                <h6 className=" text-sm">Countries</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
