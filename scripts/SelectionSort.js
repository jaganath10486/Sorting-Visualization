//selection Sort
SelectionSort = async () => 
{
    for(var i = 0; i < n; ++i) 
    {
        let minIndex = i;
        for(var j = i; j < n; ++j) 
        {
            await currentIndex(minIndex);
            await currentIndex(j);
            if(await compare(minIndex, j)) 
            {
                await visitedIndex(minIndex);
                minIndex = j;
            }
            await visitedIndex(j);
            await currentIndex(minIndex);
        }
        await currentIndex(minIndex);
        await currentIndex(i);
        await pause();
        await swap(minIndex, i);
        await visitedIndex(minIndex);
        await doneIndex(i);
    }
    sorted = 1;
}