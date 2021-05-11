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
      width={800}
      height={600}
      alt=""
    />
  </div>
)

export default ListDetail
