import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type AnimeListProps={
  api:any;
}
const AnimeList = (props:AnimeListProps) => {
  const {api} = props
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.data?.map((anime:any)=>(
      <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer text-white hover:text-primary transition-all" key={anime.mal_id}>
        <Image 
        src={anime.images.webp.image_url}
        width={350}
        height={350}
        unoptimized={true}
        alt="image"
        className='w-full max-h-64 object-cover'
        />
        <h3 className='font-bold md:text-xl text-md p-4'>{anime.title}</h3>
      </Link>
      ))}
    </div>
  )
}

export default AnimeList