//merge sort

MergeSort = async () => 
{
    await MergeDivider(0, n-1);
    for(let count = 0 ; count < n; ++count)
    {
        await doneIndex(count);
    }
    sorted = 1;
}

MergeDivider = async (start, end) => 
{
    if(start < end) 
    {
        let mid = start + Math.floor((end - start)/2);
        await MergeDivider(start, mid);
        await MergeDivider(mid+1, end);
        await Merge(start, mid, end);
    }
}

Merge = async (start, mid, end) => 
{
    let newList = new Array();
    let frontcounter = start;
    let midcounter = mid + 1;
    
    while(frontcounter <= mid && midcounter <= end) 
    {
        let fvalue = Number(blocks[frontcounter].getAttribute("value"));
        let svalue = Number(blocks[midcounter].getAttribute("value"));
        if(fvalue >= svalue) 
        {
            newList.push(svalue);
            ++midcounter;
        }
        else 
        {
            newList.push(fvalue);
            ++frontcounter;
        }
    }
    while(frontcounter <= mid) 
    {
        newList.push(Number(blocks[frontcounter].getAttribute("value")));
        ++frontcounter;
    }
    while(midcounter <= end) 
    {
        newList.push(Number(blocks[midcounter].getAttribute("value")));
        ++midcounter;
    }

    for(let c = start ; c <= end ; ++c) 
    {
        await currentIndex(c);
    }
    for(let c = start, point = 0 ; c <= end && point < newList.length; ++c, ++point) 
    {
        await pause();
        blocks[c].setAttribute("value", newList[point]);
        blocks[c].style.height = `${3.5*newList[point]}px`;
    }
    for(let c = start ; c <= end ; ++c) 
    {
       await currentIndex(c);
    }
}