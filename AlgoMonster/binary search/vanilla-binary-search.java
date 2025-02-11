// Given a sorted array of integers and an integer called target, find the element that equals the target and return its index. If the element is not found, return -1.

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

class Solution {
    public static int binarySearch(List<Integer> arr, int target) {
//         divide and conquer
//             left side var
//             right side var
            
//             loop through the arr
//                 mid var from (right - left/2) + left
//                 compare mid var to target
//                     if mid is greater than tar -- set right side to mid
//                     else if mid is less than tar -- left side to mid
//                     else return mid
//              return -1
        int left = 0;
        int right = arr.size()-1;
        while(left <= right) {
            int mid = (right-left)/2 + left;
            if(arr.get(mid) == target) return mid;
            else if (arr.get(mid) > target) right = mid-1;
            else left = mid+1;
        }
        return -1;
    }

    public static List<String> splitWords(String s) {
        return s.isEmpty() ? List.of() : Arrays.asList(s.split(" "));
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<Integer> arr = splitWords(scanner.nextLine()).stream().map(Integer::parseInt).collect(Collectors.toList());
        int target = Integer.parseInt(scanner.nextLine());
        scanner.close();
        int res = binarySearch(arr, target);
        System.out.println(res);
    }
}