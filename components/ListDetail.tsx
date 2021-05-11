import * as React from 'react'
import Image from 'next/image'

import { User } from '../interfaces'

type ListDetailProps = {
  item: User
}

const ListDetail = ({ item: user }: ListDetailProps) => (
  <div>
    <h1>Detail for {user.name}</h1>
    <p>ID: {user.id}</p>
    <Image
      src={user.image}
      objectFit="cover"
      width={300}
      height={250}
      alt=""
      loading="lazy"
    />
  </div>
)

export default ListDetail
