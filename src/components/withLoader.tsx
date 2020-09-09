import React from 'react'

interface ILoaderState {
  data: any
  isLoading: boolean
}

interface ILoaderProps {
  data: any
}

const withLoader = <P extends ILoaderState>(WrapComponent: React.ComponentType<P>, url: string) => {}
