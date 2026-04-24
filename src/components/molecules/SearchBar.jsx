import Input from '../atoms/Input'

const SearchBar = ({ value, onChange }) => (
  <div className="w-full max-w-md">
    <Input
      placeholder="🔍 Buscar jerseys..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </div>
)

export default SearchBar