import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { User } from '../interfaces'

type Props = {
  data: User
}

const ListItem = ({ data }: Props) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <a>
      <Image
        src={data.image}
        objectFit="cover"
        width={300}
        height={250}
        alt=""
        loading="lazy"
      />
      {data.id}: {data.name}
    </a>
  </Link>
)

export default ListItem
