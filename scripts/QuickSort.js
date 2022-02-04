//Quick Sort

QuickSort = async () => 
{
    await QuickDivider(0, n-1);
    for(let c = 0 ; c < n; ++c) 
    {
        await doneIndex(c);
    }
    sorted = 1;
}

QuickDivider = async (start, end) => 
{
    if(start < end) 
    {
        let pivot = await Partition(start, end);
        await QuickDivider(start, pivot-1);
        await QuickDivider(pivot+1, end);
    }
}

Partition = async (start, end) => 
{
    let pivot = blocks[end].getAttribute("value");
    let prev_index = start - 1;

    await currentIndex(end);
    for(let c = start ; c < end ; ++c) 
    {
        let currValue = Number(blocks[c].getAttribute("value"));
        await currentIndex(c);
        if(currValue < pivot) 
        {
            prev_index += 1;
            await currentIndex(prev_index);
            await swap(c, prev_index);
            await visitedIndex(prev_index);
        }
        await visitedIndex(c);
    }
    await swap(prev_index+1, end);
    await visitedIndex(end);
    return prev_index + 1;
}