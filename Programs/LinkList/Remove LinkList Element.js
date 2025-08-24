class ListNode 
{
    constructor(val, next = null) 
    {
        this.val = val;
        this.next = next;
    }
}

function createLinkList(arr) 
{
    if (arr.length === 0) 
    {
        return null;
    }

    let head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) 
    {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
}

function printLinkedList(head) 
{
    let curr = head;
    let result = [];

    while (curr) {
        result.push(curr.val);
        curr = curr.next;
    }

    console.log(result.join(" -> "));
}

function RemoveElement(head, val) 
{
    
    while (head !== null && head.val === val) 
    {
        head = head.next;
    }

    let curr = head;

    while (curr !== null && curr.next !== null)
    {
        if (curr.next.val === val) 
        {
            curr.next = curr.next.next; 
        } 
        else 
        {
            curr = curr.next; 
        }
    }

    return head;
}


let arr = [1, 2, 6, 3, 4, 5, 6];
let head = createLinkList(arr);

let val = 6;

head = RemoveElement(head, val); 

printLinkedList(head);
