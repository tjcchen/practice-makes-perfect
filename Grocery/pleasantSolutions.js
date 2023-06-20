/**
 * Pleasant Solutions Notes
 * 
 * @since 2023/06/20
 */
const funcky = (x) => {
  if (x > 0) {
    x -= 1;
    funcky(x)
  }
  console.log(x);
}

funcky(5);

let data = [7, 3, 8, 1, 2, 5];
let i, temp, numItems = data.length;
if (data.length === 0) {
  return;
}
temp = data[0];

for (i = 0; i <= numItems - 1; i++) {
  data[i] = data[i + 1];
}

data[data.length -1] = temp;

console.log(data);

// BinarySearch(int[] A, int searchValue, int low, int high)

// 1. List All = Questions[].where(true);
// 2. List Answered = Questions[].where(IsAnswered);
// 3. List InProgress = Questions[].where(!IsAnswered);
// 4. List HasBeenViewed = Questions[].where(IsViewed);
// 5. List HasNotBeenViewed = Questions[].where(!IsViewed);

// 1. Region
// 2. WorldWar
// 3. Capital
// 4. NATOMembership
// 5. City
// 6. Country

// void Foo(TreeNode root)
// {
//   Stack nodes = new Stack();
//   nodes.push(root);

//   while (nodes.Count > 0) {
//     TreeNode node = (TreeNode)nodes.Pop();
//     Console.WriteLine(node.Text);
//     for (int i = node.Nodes.Count -1; i >= 0; i--) {
//       nodes.Push(nodes.Nodes[i]);
//     }
//   }
// }

// TreeNode current = root;
// while (current != null) {
//   if (current.left == null) {
//     Console.WriteLine(current.Text);
//     current = current.right;
//   } else {
//     TreeNode predecessor = current.left;
//     while (predecessor.right != null && predecessor.right != current) {
//       predecessor = predecessor.right;
//     }
//     if (predecessor.right == null) {
//       predecessor.right = current;
//       current = current.left;
//     } else {
//       predecessor.right = null;
//       Console.WriteLine(current.Text);
//       current = current.right;
//     }
//   }
// }
