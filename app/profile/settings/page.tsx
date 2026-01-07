import { Separator } from "@/components/ui/separator"
import { ProfileForm } from "@/components/forms/profile-form"

export default function SettingsProfilePage() {
  return (
    <div className="space-y-6 p-4 md:p-10 pb-16">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">프로필</h2>
        <p className="text-muted-foreground">
          계정의 공개 프로필을 관리하고 설정을 업데이트하세요.
        </p>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <div className="flex-1 lg:max-w-2xl">
          <ProfileForm />
        </div>
      </div>
    </div>
  )
}
