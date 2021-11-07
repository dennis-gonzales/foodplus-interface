import React from 'react'
import { StyleSheet } from 'react-native';
import { Chip } from 'react-native-paper';

import { appTheme } from '../../../core/configs/theme';

interface CategoryProps {
  category: string;
  isActive: boolean;
  onCategoryPressed: (category: string) => void;
}

const Category: React.FC<CategoryProps> = ({
  category,
  isActive,
  onCategoryPressed,
}) => {
  return (
    <Chip
      style={[styles.categoryChip, isActive && styles.activeCategory]}
      onPress={() => onCategoryPressed(category)}
    >
      {category}
    </Chip>
  );
};

const styles = StyleSheet.create({
  activeCategory: {
    backgroundColor: appTheme.colors.primary,
  },
  categoryChip: {
    backgroundColor: appTheme.colors.background,
    elevation: 2,
    margin: 4,
  },
});

export default Category;