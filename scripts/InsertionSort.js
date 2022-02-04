InsertionSort = async () => 
{
    for(let i = 0 ; i < n - 1 ; ++i) 
    {
        let j = i;
        while(j >= 0 && await compare(j,j+1)) 
        {
            await currentIndex(j);
            await currentIndex(j+1);
            await pause();
            await swap(j,j+1);
            await visitedIndex(j);
            await visitedIndex(j+1);
            j -= 1;
        }
    }
    for(let counter = 0 ; counter < n; ++counter) 
    {
        await doneIndex(counter);
    }
    sorted = 1;
}