import { action } from '@storybook/addon-actions'
import CustomDropdown from '../components/dropdown'

export default {
    title: 'components/CustomDropdown',
    component: CustomDropdown,
}

const options = [
    { label: 'Option 1', value: 'option-1' },
    { label: 'Option 2', value: 'option-2' },

]

export const Default = () => <CustomDropdown options={options} onSelect={action('onSelect')} />