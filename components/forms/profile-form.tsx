"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const profileFormSchema = z.object({
  nickname: z
    .string()
    .min(2, {
      message: "닉네임은 최소 2글자 이상이어야 합니다.",
    })
    .max(30, {
      message: "닉네임은 30글자를 초과할 수 없습니다.",
    }),
  profileImage: z.string().optional(), // For simplicity, storing URL. Real implementation would involve file upload.
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

// This can be fetched from a user context or API
const defaultValues: Partial<ProfileFormValues> = {
  nickname: "여행자",
  profileImage: "/placeholder-user.jpg", // Assuming this path is valid for a placeholder
}

export function ProfileForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  })

  function onSubmit(data: ProfileFormValues) {
    toast({
      title: "프로필 업데이트 완료!",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>프로필 이미지</CardTitle>
            <CardDescription>
              새로운 프로필 이미지를 업로드하세요.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex items-center space-x-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={form.watch("profileImage") || "/placeholder-user.jpg"} alt="@user" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-2">
              <Button type="button" variant="outline">
                이미지 변경
              </Button>
              <Button type="button" variant="ghost" className="text-destructive hover:text-destructive">
                이미지 삭제
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>닉네임 설정</CardTitle>
            <CardDescription>
              다른 사용자에게 표시될 닉네임을 설정하세요.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="nickname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>닉네임</FormLabel>
                  <FormControl>
                    <Input placeholder="닉네임을 입력하세요" {...field} />
                  </FormControl>
                  <FormDescription>
                    공개적으로 표시되는 이름입니다. 신중하게 선택하세요.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Button type="submit">프로필 업데이트</Button>
      </form>
    </Form>
  )
}
