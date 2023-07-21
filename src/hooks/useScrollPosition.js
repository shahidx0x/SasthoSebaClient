import {  useState } from 'react'
import { useScroll } from '@react-hooks-library/core'

export function useScrollPosition() {
    const [scroll, setScroll] = useState({ x: 0, y: 0 })

    useScroll(({ scrollX, scrollY }) =>
        setScroll({ x: scrollX, y: scrollY })
    )
    return {scroll}
}
