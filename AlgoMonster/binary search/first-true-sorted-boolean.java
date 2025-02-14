import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

class Solution {
    public static int findBoundary(List<Boolean> arr) {
//         binary search - divide and conquor;
//         left side;
//         right side;
//         index holder = -1 ;
        
//         while loop
//             mid var -- left + right-left/2
//             check for target
//                 if target matches, save index in index holder and drop right side
//                 if target doesnt then raise left side
        
//         return index holder;
        int left = 0;
        int right = arr.size()-1;
        int indexHolder = -1;
        
        while (left <= right) {
            int mid = left + (right - left)/2;
            if(arr.get(mid)) {
                indexHolder = mid;
                right = mid - 1;
            }
            else {
                left = mid + 1;
            } 
        }
        return indexHolder;
    }

    public static List<String> splitWords(String s) {
        return s.isEmpty() ? List.of() : Arrays.asList(s.split(" "));
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<Boolean> arr = splitWords(scanner.nextLine()).stream().map(v -> v.equals("true")).collect(Collectors.toList());
        scanner.close();
        int res = findBoundary(arr);
        System.out.println(res);
    }
}
