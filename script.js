const startArr = [22, 3, 11, 43, 17, 46, 5, 23, 32, 36, 12, 34, 37, 4, 49, 33, 31];
drawGraph(startArr)

document.getElementById('repeat').addEventListener("click", () => {
    let arr = startArr.slice(0)
    drawGraph(arr)
    setTimeout(() => QuickSort(arr, 0, arr.length - 1), 1500)
})

function drawGraph(arr, pivot = null) {
    let graph = document.getElementById('graph')
    graph.innerHTML = ""
    let maxHeight = Math.max.apply(Math, arr) * 10
    for (let key in arr) {
        let item = arr[key]
        let height = item * 10
        let margin = maxHeight - height

        if (key == pivot) {
            graph.innerHTML += "<div class=\"item\" style=\"height:" + height + "px; background-color: red; margin-top: " + margin + "px\">" + item + "</div>"
        } else {
            graph.innerHTML += "<div class=\"item\" style=\"height:" + height + "px; margin-top: " + margin + "px\">" + item + "</div>"
        }
    }
}

async function QuickSort(A, p, r)
{
    drawGraph(A, r)
    if(p<r)
    {
        let q = await Partition(A, p, r)
        await QuickSort(A, p, q)
        await QuickSort(A, q+1, r)
    }
}

function Partition(A, p, r)
{
    var x = A[r];
    var i=p-1;
    for(var j=p; j<=r; j++)
    {
        if(A[j] <= x) {
            i++;
            var temp = A[i];
            A[i] = A[j];
            A[j] = temp;
        }
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(i<r ? i : i-1)
        }, 500)
    })
}

