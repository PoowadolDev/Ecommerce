import RangeSlider from 'rn-range-slider';

export default function Page() {

    const renderThumb = useCallback(() => <Thumb/>, []);
    const renderRail = useCallback(() => <Rail/>, []);
    const renderRailSelected = useCallback(() => <RailSelected/>, []);
    const renderLabel = useCallback(value => <Label text={value}/>, []);
    const renderNotch = useCallback(() => <Notch/>, []);
    const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
    }, []);

    return (
    <div className="flex justify-center mx-40">
      <div className="flex-2 mr-4 w-80">
        {/* Content for the first column */}
        <div className="bg-gray-200 rounded-t-lg  border-gray-400">
            <div className="p-4 text-lg border-4 text-charcoal-black font-bold">
                Price
            </div>
            <div className="rounded-b-lg border-gray-400 bg-white">
                <Slider
                    style={styles.slider}
                    min={0}
                    max={100}
                    step={1}
                    floatingLabel
                    renderThumb={renderThumb}
                    renderRail={renderRail}
                    renderRailSelected={renderRailSelected}
                    renderLabel={renderLabel}
                    renderNotch={renderNotch}
                    onValueChanged={handleValueChange}
                />
            </div>
        </div>
      </div>
      <div className="flex-1">
        {/* Content for the second column */}
        <div className="bg-gray-300 p-4 rounded-lg">Column 2</div>
      </div>
    </div>
    )
}