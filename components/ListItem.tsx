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
        width={300}
        height={250}
        objectFit="cover"
        alt=""
      />
      {data.id}: {data.name}
    </a>
  </Link>
)

export default ListItem
