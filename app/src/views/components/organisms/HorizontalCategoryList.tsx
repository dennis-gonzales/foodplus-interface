import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Category from '../atoms/Category';

type HorizontalCategoryListProps = Omit<
  React.ComponentPropsWithoutRef<typeof Category>,
  'category' | 'isActive'
> & {
  categories: string[];
  activeCategory: string | undefined;
};

const HorizontalCategoryList: React.FC<HorizontalCategoryListProps> = ({
  activeCategory,
  categories,
  onCategoryPressed,
}) => {
  console.log('category list - render');

  const renderItem = ({ item }: { item: string }) => (
    <Category
      category={item}
      isActive={item === activeCategory}
      onCategoryPressed={onCategoryPressed}
    />
  );

  return (
    <View>
      <FlatList
        data={categories}
        horizontal
        contentContainerStyle={styles.categoriesContainer}
        // extraData={activeCategory}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    marginTop: 10,
    paddingHorizontal: 5,
  },
});

export default HorizontalCategoryList;
