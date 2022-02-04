
pause = async() => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        },time);
    });
}

const compare = async(index1, index2) => 
{
    await pause();
    let value1 = Number(blocks[index1].getAttribute("value"));
    let value2 = Number(blocks[index2].getAttribute("value"));
    if(value1 > value2)
    {
        return new Promise(resolve => {
            resolve(true);
        });
    }
    else
    {
        return new Promise(resolve => {
            resolve(false);
        });
    }
};

async function swap(index1, index2)
{
    await pause();
    let value1 = Number(blocks[index1].getAttribute("value"));
    let value2 = Number(blocks[index2].getAttribute("value"));
    blocks[index1].setAttribute("value", value2);
    blocks[index1].style.height = `${value2 * 3}px`;
    blocks[index2].setAttribute("value", value1);
    blocks[index2].style.height = `${value1 * 3}px`;
}

async function currentIndex(index)
{
    blocks[index].classList.add("current");
}

async function doneIndex(index)
{
    blocks[index].setAttribute("class", "block done");
}

async function visitedIndex(index)
{
    blocks[index].setAttribute("class", "block");
}
