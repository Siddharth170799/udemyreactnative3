import Category from '@/models/category'
import React from 'react'
import { FlatList,View } from 'react-native'

const CategoriesScreen = () => {
  return (
   <FlatList data={Category}>

   </FlatList>


  )
}

export default CategoriesScreen
