import { atom, useRecoilState, RecoilRoot, selector, useRecoilValue } from 'recoil'

const fontSizeState = atom({
    key: 'fontSizeState',
    default: 14,
})

const fontSizeLabelState = selector({
    key: 'fontSizeLabelState',
    get: ({ get }) => {
        const size = get(fontSizeState)
        return `${size}px`
    }
})

function FontButton() {
    const [fontSize, setFontSize] = useRecoilState(fontSizeState)
    const sizeLabel = useRecoilValue(fontSizeLabelState)

    return <>
        <h3>{sizeLabel}</h3>
        <button
            onClick={() => {
                setFontSize((size) => size + 1)
            }}
            style={{ fontSize }}
        >Click to enlarge</button>
        <button onClick={() => setFontSize(14)}>reset</button>
    </>
}


function FontText() {
    const [fontSize] = useRecoilState(fontSizeState)

    return <>
        <p style={{ fontSize }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, ipsam, omnis! Ad adipisci aliquam aspernatur error impedit incidunt ipsam magnam modi nostrum, numquam odio placeat rerum, saepe vel vitae voluptas!</p>
    </>
}

export function TryRecoil() {
    return <RecoilRoot>
        <div>
            <FontButton />
            <FontText />
        </div>
    </RecoilRoot>
}