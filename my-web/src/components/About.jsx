export default function About(){
return(
<section className="min-h-[125vh] w-[100vw] bg-white top-0 flex flex-col">

<h3 className="text-[#212121] font-sans font-bold text-[16vw] w-[100vw] leading-none mb-10 ml-1 mr-1 mt-0 whitespace-nowrap overflow-hidden flex justify-center">
  ABOUT ✦ ME
</h3>

<section className="meText text-[2vw] flex flex-wrap mb-40 ml-24 w-2/3">
  <p className="opacity-0 animate-fadeIn delay-100">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  <p className="opacity-0 animate-fadeIn delay-200">Modi ex quo molestias provident inventore.</p>
  <p className="opacity-0 animate-fadeIn delay-300">Suscipit ipsam neque sint.</p>
  <p className="opacity-0 animate-fadeIn delay-400">Aspernatur numquam quia.</p>
  <p className="opacity-0 animate-fadeIn delay-500">Consequatur voluptatem ut quis optio distinctio voluptatum cumque nihil.</p>
</section>

<div className="content flex flex-row">
<section className="textArea w-2/3 flex flex-row gap-[20vw] ml-24">
<section>
        <div className="contentSection mb-8">
        <h3 className="px-4 py-2 border-[#FF97DB] border-4 rounded-[50px] bg-transparent text-[#212121] text-5xl font-bold leading-none p-0 uppercase mb-4 ">Header</h3>
        <h3 className="font-semibold mb-4 text-3xl translate-x-[1vw]">Subtitle</h3>
        <p className='text-[#212121] text-xl translate-x-[1vw]'>Lorem Ipsum</p>
        </div>
        <div className="contentSection">
        <h3 className="px-4 py-2 border-[#FF97DB] border-4 rounded-[50px] bg-transparent text-[#212121] text-5xl font-bold leading-none p-0 uppercase mb-4 ">Header</h3>
        <h3 className="font-semibold mb-4 text-3xl translate-x-[1vw] ">Subtitle</h3>
        <p className='text-[#212121] text-xl translate-x-[1vw]'>Lorem Ipsum</p>
</div>


</section>

<section>

    <div className="contentSection mb-8">
    <h3 className="px-4 py-2 border-[#FF97DB] border-4 rounded-[50px] bg-transparent text-[#212121] text-5xl font-bold leading-none p-0 uppercase mb-4 ">Header</h3>
    <h3 className="font-semibold mb-4 text-3xl translate-x-[1vw]">Subtitle</h3>
    <p className='text-[#212121] text-xl translate-x-[1vw] '>Lorem Ipsum</p>
    </div>

    <div className="contentSection">
    <h3 className="px-4 py-2 border-[#FF97DB] border-4 rounded-[50px] bg-transparent text-[#212121] text-5xl font-bold leading-none p-0 uppercase mb-4 ">Header</h3>
    <h3 className="font-semibold mb-4 text-3xl translate-x-[1vw] ">Subtitle</h3>
    <p className='text-[#212121] text-xl translate-x-[1vw] '>Lorem Ipsum</p>
    </div>

</section>

</section>

<section className="photoArea w-1/3 mr-[1vw] ">
<img src="/me-pink.png" className="w-auto h-5/6 object-cover border-black border-4  "/>
</section>

</div>

</section>
)
}