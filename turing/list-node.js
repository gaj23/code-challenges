// Technical Challenge A
// You are given two sorted linked lists. The data in both lists will be sorted in ascending order.
// Merge all data into a single linked list, which is also sorted in ascending order at the end of this process.

// Neither linked list will be empty; each linked list will contain at least one item.
// should I assume that I want to stop when the .length is... AT LEAST ONE
// Your function should return an ARRAY of the elements in the last linked list

//edge cases: what if list.val or list.next is a falsy value? Null or undefined?

// JS Starting Point
//this is my linked list
//I'm going to have two instantiations of this?
class ListNode {
  constructor(data) {
    this.val = data;
    this.next = null;
    //what's this?
  }
}
//make a third object instantiation where the "data" passed into is the sorted previous instantiations
//from this third object instantion, I want to return this.val (should be our combined, sorted node lists)

const merge_two_sorted_linked_lists = (list1, list2) => {
  const result = [];
  // start a new list with a nil value, which we'll skip later
  //I know that I need to utilize list1 & 2
  let new_list = new ListNode(null);
  // we need to keep track of the start of this linked list for later, also
  let head = new_list;

  // what do I use head for? why is new_list reassigned?
  // new_list.val = null, new_list.next = null
  //how to evaluate which element of list1 vs list2, is the lowest num
  //OBJECT not array, I'm accessing the list1.val & list2.val
  if (list1.val > list2.val) {
    head.val = list2.val
  } else {
    head.val = list1.val
  }
  console.log(head)
  // now I enter into the .next
  // I know I have to now comapre the greater num from val to the next values in the object
  // new_list.val = lowest num from either list1 or 2
  // new_list.next = second to lowest
  // new_list.next.next = third ....

  // so then I need to take all those values and also store them in the result array

  // can I do those two things (push to the result and create the head linked list) at the same time?

  return result;
}
// // test cases:
var list1 = new ListNode(1);
//this should have the value list1.val === 1 (intergaer)

list1.next = new ListNode(3);
// assigning a new object instantion of the ListNode
// this inception beings?

list1.next.next = new ListNode(5);
// so we have a nested node of 3

var list2 = new ListNode(2);
list2.next = new ListNode(4);
list2.next.next = new ListNode(6);
// so this is also 3 deep.

merge_two_sorted_linked_lists(list1, list2)

if (JSON.stringify(merge_two_sorted_linked_lists(list1, list2)) != JSON.stringify([1, 2, 3, 4, 5, 6])) {
  console.log("test case 1 failed");
}
//but I'm still looking for that array result to be returned.

// var list1 = new ListNode(1);
// list1.next = new ListNode(2);
// var list2 = new ListNode(4);
// list2.next = new ListNode(5);
// list2.next.next = new ListNode(6);
// if (JSON.stringify(merge_two_sorted_linked_lists(list1, list2)) != JSON.stringify([1, 2, 4, 5, 6])) {
//   console.log("test case 2 failed");
// }
// var list1 = new ListNode(10);
// list1.next = new ListNode(20);
// list1.next.next = new ListNode(40);
// var list2 = new ListNode(0);
// if (JSON.stringify(merge_two_sorted_linked_lists(list1, list2)) != JSON.stringify([0, 10, 20, 40])) {
//   console.log("test case 3 failed");
// }
// console.log("all done!");
