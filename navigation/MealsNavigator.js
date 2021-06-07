
import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen'
import MealDetailScreen from '../screens/MealDetailScreen';
import MealsScreen from '../screens/MealsScreen';

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    Meals: MealsScreen,
    MealDetails: MealDetailScreen
});

export default createAppContainer(MealsNavigator)

