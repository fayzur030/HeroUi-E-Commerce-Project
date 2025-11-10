import React from 'react'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@heroui/react'

export default function ProductDropdown() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(['Features']))

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(', ').replace(/_/g, ' '),
    [selectedKeys]
  )

  const handleSelectionChange = (keys: React.Key | ReadonlySet<React.Key>) => {
    if (keys instanceof Set) {
      setSelectedKeys(new Set(keys as Set<string>))
    } else {
      setSelectedKeys(new Set([keys as string]))
    }
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className='capitalize' variant='bordered'>
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        aria-label='Single selection example'
        selectedKeys={selectedKeys}
        selectionMode='single'
        variant='flat'
        onSelectionChange={handleSelectionChange}
      >
        <DropdownItem key='t-shirt'>T-shirt</DropdownItem>
        <DropdownItem key='ssd'>SSD</DropdownItem>
        <DropdownItem key='monitor'>Monitor</DropdownItem>
        <DropdownItem key='jacket women'>Jacket Women</DropdownItem>
        <DropdownItem key='ring'>Ring</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
