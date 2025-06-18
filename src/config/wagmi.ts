import { http } from 'wagmi'
import { fuse } from 'wagmi/chains'
import { createConfig } from 'wagmi'

export const config = createConfig({
  chains: [fuse],
  transports: {
    [fuse.id]: http(),
  },
}) 