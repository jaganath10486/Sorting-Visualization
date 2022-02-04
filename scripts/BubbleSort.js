BubbleSort = async() => 
{
    let swapped;
    for(var i =0; i<n-1; i++)
    {
        swapped = false;
        for(var j=0; j<n-i-1; j++)
        {
            await currentIndex(j);
            await currentIndex(j+1);
            if(await compare(j,j+1))
            {
                //console.log(j,j+1);
                await swap(j,j+1);
                swapped = true;
            }
            await visitedIndex(j);
            await visitedIndex(j+1);
        }
        await doneIndex(n - i - 1);
    }
    await doneIndex(0);
    sorted = 1;
}


